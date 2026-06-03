"use client";

import Image from "next/image";
import type { OrgNode } from "@/lib/mock-data/desa-kami";

function buildTree(nodes: OrgNode[], parentId?: string): OrgNode[] {
  return nodes.filter((n) => n.parentId === parentId);
}

function NodeCard({ node }: { node: OrgNode }) {
  return (
    <div className="flex w-[9.5rem] shrink-0 flex-col items-center rounded-xl border border-mid-gray/30 bg-white p-3 shadow-[var(--shadow-card)] sm:w-40">
      <div className="relative h-14 w-14 overflow-hidden rounded-full sm:h-16 sm:w-16">
        <Image
          src={node.foto}
          alt={node.nama}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 56px, 64px"
        />
      </div>
      <p className="mt-2 text-center text-xs font-bold leading-snug text-primary line-clamp-2">
        {node.nama}
      </p>
      <p className="mt-0.5 text-center text-[10px] leading-tight text-dark-gray">
        {node.jabatan}
      </p>
    </div>
  );
}

function Branch({ node, all }: { node: OrgNode; all: OrgNode[] }) {
  const children = buildTree(all, node.id);
  return (
    <div className="flex flex-col items-center gap-3">
      <NodeCard node={node} />
      {children.length > 0 && (
        <div className="flex gap-3 pt-2">
          {children.map((c) => (
            <Branch key={c.id} node={c} all={all} />
          ))}
        </div>
      )}
    </div>
  );
}

export function OrgChart({
  nodes,
  title,
}: {
  nodes: OrgNode[];
  title: string;
}) {
  const roots = buildTree(nodes);
  return (
    <div>
      {title !== "Pemerintah Desa" && title !== "BPD" && (
        <h3 className="mb-4 text-lg font-bold text-primary">{title}</h3>
      )}
      <p className="mb-3 text-xs text-dark-gray sm:text-sm">
        <span className="md:hidden">Geser ke kanan untuk melihat seluruh bagan ›</span>
        <span className="hidden md:inline">Struktur hierarki organisasi desa</span>
      </p>
      <div className="-mx-1 overflow-x-auto pb-2 sm:mx-0">
        <div className="flex min-w-max justify-start gap-4 px-1 sm:justify-center sm:gap-6 sm:px-2">
          {roots.map((r) => (
            <Branch key={r.id} node={r} all={nodes} />
          ))}
        </div>
      </div>
    </div>
  );
}
