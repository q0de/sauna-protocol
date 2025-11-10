import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-bold mt-12 mb-4" id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-bold mt-8 mb-3" id={props.children?.toString().toLowerCase().replace(/\s+/g, '-')} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <div className="mb-6 text-lg leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-lg" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link 
      href={props.href || '#'} 
      className="text-[#2196f3] hover:text-[#1976d2] underline"
      {...props}
    >
      {props.children}
    </Link>
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} className="rounded-lg my-8 w-full h-auto" alt={props.alt || ''} />
  },
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-[#ff6b6b] pl-6 italic my-6 text-gray-700" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-6" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <table className="w-full my-8 border-collapse" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-gray-100 font-bold p-3 text-left border" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="p-3 border" {...props} />
  ),
}

type MDXContentProps = {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  )
}

