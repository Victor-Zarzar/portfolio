import Image from 'next/image'

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Hi, i´m Victor Zarzar! 👋</h1>
            <h2>Sofware Developer</h2>
            <h3>Web/Mobile</h3>
          </div>
          <Image
            src="/profile.jpg"
            alt="Vercel Logo"
            width={310}
            height={300}
            priority
          />
        </div>
    )
}