import { NextRequest, NextResponse } from 'next/server';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

let cart: CartItem[] = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, price, quantity, image } = body;

    if (!id || !title || !price || !quantity || !image) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const existingIndex = cart.findIndex((item) => item.id === id);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ id, title, price, quantity, image });
    }

    return NextResponse.json(cart, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, quantity } = body;

    if (!id || typeof quantity !== 'number' || quantity < 0) {
      return NextResponse.json(
        { error: 'Invalid id or quantity' },
        { status: 400 }
      );
    }

    const index = cart.findIndex((item) => item.id === id);
    if (index === -1) {
      return NextResponse.json(
        { error: 'Item not found in cart' },
        { status: 404 }
      );
    }

    if (quantity === 0) {
      cart = cart.filter((item) => item.id !== id);
    } else {
      cart[index].quantity = quantity;
    }

    return NextResponse.json(cart);
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing id parameter' },
        { status: 400 }
      );
    }

    const productId = parseInt(id, 10);
    cart = cart.filter((item) => item.id !== productId);

    return NextResponse.json(cart);
  } catch {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}