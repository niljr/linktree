import Image from 'next/image';

export default function Avatar() {
    return (
        <Image
            src='https://avatars.githubusercontent.com/u/16659772'
            alt='Avatar'
            width={100}
            height={100}
            className='rounded-full' />
    )
}