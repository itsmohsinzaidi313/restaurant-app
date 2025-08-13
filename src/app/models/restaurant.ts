export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  image: string;
  // Other properties like address, opening hours, etc.
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  restaurantId: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}