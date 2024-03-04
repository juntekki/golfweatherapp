/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ds1afA0DOnE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import logo from './assets/finalv1.png';
export default function Title() {
    return (
      <header className="w-full py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-2 px-4 text-center md:gap-4 md:px-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Golf Sää</h1>
            <p className="text-sm tracking-wide/0.5 uppercase font-semibold/600 muted-accents-6 dark:muted-accents-4">
              By 
            </p>
            <img src={logo} alt="Skymarx logo" style={{ width: '200px', height: 'auto' }}/>
          </div>
        </div>
      </header>
    )
  }
  
  