import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

type Props = {
  image: ProjectImage;
  title: string;
};

export function ProjectPreview({ image, title }: Props) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-muted">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 36rem"
        className="object-cover object-center transition duration-300 motion-reduce:transition-none md:group-hover:scale-[1.015]"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.04]" aria-hidden="true" />
      <span className="sr-only">{title} project artwork</span>
    </div>
  );
}