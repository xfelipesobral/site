import { Outlet } from 'react-router-dom'

export default function Layout() {

    return (
        <div>
            <header className='bg-white p-4 flex justify-between'>
                <h1>Felipe Sobral</h1>
                <nav>
                    <p>menu</p>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>rodape</p>
            </footer>
        </div>
    )
}