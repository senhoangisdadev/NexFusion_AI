import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Link className={cn(buttonVariants({ variant: 'outline' }))} href={'/image-classification'}>Upload Image</Link>
      <Link className={cn(buttonVariants({ variant: 'outline' }))} href={'/text-to-speech'}>Generate Speech [EN]</Link>
      <Link className={cn(buttonVariants({ variant: 'outline' }))} href={'/image-text-to-text-nanoLLaVA'}>image-text-to-text-nanoLLaVA</Link>
    </main>
  )
}
