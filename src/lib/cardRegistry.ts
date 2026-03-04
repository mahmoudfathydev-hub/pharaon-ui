import React from "react";
import BasicCard from "@/components/cards/BasicCard";
import CardWithImage from "@/components/cards/CardWithImage";
import GlassmorphismCard from "@/components/cards/GlassmorphismCard";
import GradientCard from "@/components/cards/GradientCard";
import InteractiveCard from "@/components/cards/InteractiveCard";
import StatsCard from "@/components/cards/StatsCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import PricingCard from "@/components/cards/PricingCard";
import FeatureCard from "@/components/cards/FeatureCard";
import ProfileCard from "@/components/cards/ProfileCard";
import NotificationCard from "@/components/cards/NotificationCard";
import EventCard from "@/components/cards/EventCard";
import ProductCard from "@/components/cards/ProductCard";
import BlogCard from "@/components/cards/BlogCard";
import DashboardCard from "@/components/cards/DashboardCard";

export type CardComponentType = React.ComponentType<any>;

export const cardRegistry: Record<string, CardComponentType> = {
  "basic-card": BasicCard,
  "card-with-image": CardWithImage,
  "glassmorphism-card": GlassmorphismCard,
  "gradient-card": GradientCard,
  "interactive-card": InteractiveCard,
  "stats-card": StatsCard,
  "testimonial-card": TestimonialCard,
  "pricing-card": PricingCard,
  "feature-card": FeatureCard,
  "profile-card": ProfileCard,
  "notification-card": NotificationCard,
  "event-card": EventCard,
  "product-card": ProductCard,
  "blog-card": BlogCard,
  "dashboard-card": DashboardCard,
};

export function getCardComponent(cardId: string): CardComponentType | null {
  return cardRegistry[cardId] || null;
}

export function getAvailableCardIds(): string[] {
  return Object.keys(cardRegistry);
}

export function isValidCardId(cardId: string): boolean {
  return cardId in cardRegistry;
}

export {
  BasicCard,
  CardWithImage,
  GlassmorphismCard,
  GradientCard,
  InteractiveCard,
  StatsCard,
  TestimonialCard,
  PricingCard,
  FeatureCard,
  ProfileCard,
  NotificationCard,
  EventCard,
  ProductCard,
  BlogCard,
  DashboardCard,
};

export default cardRegistry;
