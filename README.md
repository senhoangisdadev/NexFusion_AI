This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview
I have developed 2 models using Next.js and Hugging Face in this project:
- Object Detection
- Text to Speech

### Object-detection
Model: https://huggingface.co/Xenova/detr-resnet-50

Route: http://localhost:3000/image-classification
![Detect meow](https://github.com/user-attachments/assets/e9a1738d-ba09-4d25-92ca-ae4f0ca10164)

### Text to speech
Model: https://huggingface.co/Xenova/speecht5_tts

Route: http://localhost:3000/text-to-speech
![Text to speech](https://github.com/user-attachments/assets/58e7e5ab-1efd-4e33-8ee2-cdcb77187667)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Notice: The first time you call the API, please wait about 2-3 minutes for Hugging Face to download the model to cache
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

