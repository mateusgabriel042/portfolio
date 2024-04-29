import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export const SelectLanguage = () => {

  const router = useRouter();
  const { lang }: any = router.query;

  const pathname = usePathname()

  const getPathName = (language: string) => {
    const paths = pathname?.split('/');
    const newPath = paths?.slice(2).join('/');
    return `/${language}/${newPath}`
  }

  return (
    <div className="flex gap-2 items-center">
      <Link href={getPathName('pt-BR')} className={`${lang == 'pt-BR' ? 'text-dark-gray' : 'text-gray-200'} flex items-center justify-center py-1 text-xs`}>PT-BR</Link>
      <div className='w-[1px] h-[12px] bg-dark-gray'></div>
      <Link href={getPathName('en-US')} className={`${lang == 'en-US' ? 'text-dark-gray' : 'text-gray-200'} flex items-center justify-center py-1 text-xs`}>EN-US</Link>
    </div>

  )
}

export default SelectLanguage;