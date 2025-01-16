import animalTrackingImage from "@/assets/images/animal-tracking.png";
import chickenImage from "@/assets/images/chicken.png";
import computerVisionSheepImage from "@/assets/images/computer-vision-sheep.png";
import computerImage from "@/assets/images/Computer.png";
import fileSearchingImage from "@/assets/images/file-searching.png";
import imageViewImage from "@/assets/images/image-viewer.png";
import type Highlight from "@/components/home/elements/highlightComponent";
import type { THowItWorks } from "@/components/home/howItWorks";
import type { Offer } from "@/components/home/whatWeOffer";
import {
  ChooseAnimalType,
  CopyCameraIP,
  EnjoyYourExperience,
} from "@/components/svg";
import type { ComponentProps } from "react";

export const highlights: Array<ComponentProps<typeof Highlight>> = [
  {
    src: computerVisionSheepImage.src,
    title: "Real-Time Security for Your Farm",
    content:
      "Protect your farm around the clock with our advanced AI-powered surveillance system. Get instant alerts, deter threats, and enjoy peace of mind, knowing your farm is safe. Customizable solutions to fit your unique needs",
  },
  {
    src: chickenImage.src,
    title: "Protect Livestock Health with AI Health Monitoring",
    content:
      "Keep your animals healthy and thriving with our AI-powered health monitoring system. Detect issues early, receive real-time alerts, and ensure the well-being of your livestock. Prioritize animal welfare for a thriving farm",
  },
  {
    src: animalTrackingImage.src,
    title: "Unlock Real-Time Farming Insights",
    content:
      "Access real-time data on weather, soil health, and more with our AI technology. Make informed decisions, boost crop yields, and optimize resource management. Stay ahead in farming with actionable insights.",
  },
];

export const offers: Offer[] = [
  {
    title: "Real Time Security Alerts",
    image: {
      width: 165,
      height: 128,
      alt: "Computer",
      src: computerImage.src,
    },
  },
  {
    title: "Real Time Data Insights",
    image: {
      width: 165,
      height: 150,
      alt: "File Searching",
      src: fileSearchingImage.src,
    },
  },
  {
    title: "Identifying Threat with Precision",
    image: {
      width: 165,
      height: 123,
      alt: "Image Viewer",
      src: imageViewImage.src,
    },
  },
];

export const howItWorks: THowItWorks[] = [
  {
    title: "Copy camera IP address to the site",
    icon: CopyCameraIP,
  },
  {
    title: "Choose the type of animal you want to Monitor",
    icon: ChooseAnimalType,
  },
  {
    title: "Enjoy Your Experience!",
    icon: EnjoyYourExperience,
  },
];
