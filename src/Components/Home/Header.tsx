import { IoIosArrowForward } from 'react-icons/io'

interface HeaderProps {
  partName: string;
}

const Header = ({
  partName
}: HeaderProps) => {
  return (
    <section className='flex items-center justify-between'>
      <p className='text-2xl font-bold'>{partName}</p>
      <span className='flex items-center gap-[1px]'>
        <p>더보기</p>
        <IoIosArrowForward size={20}/>
      </span>
    </section>
  )
}

export default Header