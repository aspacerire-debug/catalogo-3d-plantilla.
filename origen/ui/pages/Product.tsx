import React from 'react';
import ThreeViewer from '../three/ThreeViewer';

interface ProductData {
  title: string;
  subtitle?: string;
  description?: string;
  link?: string;
  coverType: 'image' | 'video' | 'model';
  imageUrl?: string;
  videoUrl?: string;
  modelUrl?: string;
  pageColor?: string;
  textColor?: string;
}

export default function Product({ data }: { data: ProductData }) {
  const tc = data.textColor || '#e2e8f0';
  const bg = data.pageColor || '#0f172a';

  return (
    <article className="rounded-xl overflow-hidden border border-slate-700/60" style={{ background: bg, color: tc }}>
      <div className="grid md:grid-cols-2 gap-4 p-4">
        <div className="aspect-video rounded-lg overflow-hidden border border-slate-700/50">
          {data.coverType === 'image' && data.imageUrl && (
            <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover" />
          )}
          {data.coverType === 'video' && data.videoUrl && (
            <video className="w-full h-full object-cover" controls playsInline src={data.videoUrl} />
          )}
          {data.coverType === 'model' && (
            <ThreeViewer modelUrl={data.modelUrl} />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          {data.subtitle && <p className="text-slate-300">{data.subtitle}</p>}
          {data.description && <p className="text-slate-200 mt-2">{data.description}</p>}
          {data.link && (
            <a
              href={data.link}
              target="_blank"
              className="mt-4 inline-flex w-fit rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-900 hover:bg-cyan-400 transition-colors"
            >
              Ver más
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
