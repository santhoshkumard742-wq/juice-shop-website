
import { JuiceItem, ComboItem, Testimonial } from './types';
import { Leaf, Droplets, Heart, ShieldCheck } from 'lucide-react';
import React from 'react';

export const JUICE_MENU: JuiceItem[] = [
  {
    id: '1',
    name: 'Classic Orange',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=600&auto=format&fit=crop',
    benefits: ['Vitamin C boost', 'Immune support', 'Freshly squeezed'],
    color: 'bg-orange-100 border-orange-200 text-orange-600'
  },
  {
    id: '2',
    name: 'Tropical Mango',
    price: '$7.49',
    image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=600&auto=format&fit=crop',
    benefits: ['Rich in fiber', 'Eye health', 'Smooth texture'],
    color: 'bg-yellow-100 border-yellow-200 text-yellow-600'
  },
  {
    id: '3',
    name: 'Watermelon Splash',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=600&auto=format&fit=crop',
    benefits: ['Super hydrating', 'Lower blood pressure', 'Summer favorite'],
    color: 'bg-red-100 border-red-200 text-red-600'
  },
  {
    id: '4',
    name: 'Mixed Fruit Medley',
    price: '$8.49',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=600&auto=format&fit=crop',
    benefits: ['Anti-oxidants', 'Natural energy', 'Fiber rich'],
    color: 'bg-purple-100 border-purple-200 text-purple-600'
  },
  {
    id: '5',
    name: 'Detox Green',
    price: '$7.99',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=600&auto=format&fit=crop',
    benefits: ['Cleansing', 'Kale & Celery', 'Low sugar'],
    color: 'bg-green-100 border-green-200 text-green-600'
  }
];

export const FEATURES = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Freshly Squeezed',
    description: 'We press our fruits daily to ensure every drop is bursting with life and enzymes.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'No Preservatives',
    description: '100% natural. No artificial flavors, colors, or hidden additives. Ever.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Healthy Ingredients',
    description: 'Selected from organic farms to provide you with the cleanest energy possible.'
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Hygienic Preparation',
    description: 'Strict quality control in our state-of-the-art cold-pressing facility.'
  }
];

export const COMBOS: ComboItem[] = [
  {
    id: 'c1',
    name: 'Morning Energy Combo',
    description: 'Large Orange Juice + Ginger Shot + Whole Grain Granola Bar',
    price: '$12.99',
    tag: 'Popular'
  },
  {
    id: 'c2',
    name: 'Fitness Detox Combo',
    description: '2x Green Detox Juices + Aloe Vera Infusion',
    price: '$14.99',
    tag: 'Best Value'
  },
  {
    id: 'c3',
    name: 'Kids Special Combo',
    description: 'Small Watermelon + Apple Slices + Fruit Sticker Pack',
    price: '$9.99',
    tag: 'Kids Favorite'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Yoga Instructor',
    content: 'The Detox Green juice is my absolute favorite after morning sessions. I can literally feel the energy shift!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Mark Thompson',
    role: 'Graphic Designer',
    content: 'Quick delivery and the packaging is eco-friendly. The Mixed Fruit Medley tastes exactly like real fruit, not syrup.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Mother of two',
    content: 'My kids love the Watermelon Splash. It is great to find a treat for them that has zero added sugar.',
    rating: 4
  }
];
