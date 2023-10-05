import Image from 'next/image'
import image from '.././../../public/image/logo.png'
export default function Page () {
    return (
        <>
            <h1> User Profile </h1>
            <Image
                src={image}
                alt='user profile picture'
            />
        </>
    )
}