import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"

export default function ChatRow({id}: {id: string}) {
    const pathname = usePathname();
    const router = useRouter();
    return (
      <Link href={`/chat/${id}`} className="flex gap-2 items-center justify-center px-2 py-1.5 bg-white/10 mb-2 hover:bg-white/10 rounded-md duration-md ease-in">
        <p className="md:inline-flex truncate flex-1 text-sm font-medium tracking-wide justify-center items-center"> Chat {id} </p>
    </Link>
    )
  }
  