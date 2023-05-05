import Link from 'next/link'

export const Header = ({ title, subtitle }) => (
  <header className='header text-light'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <Link href='/'>
              <img src='/logo.png' className='d-none d-sm-block' alt='ASCAP Logo' height={40} />
              <img src='/logo-sm.png' className='d-block d-sm-none' alt='ASCAP Logo' height={40} />
            </Link>
          </div>
          <div className='col-4 text-center'>
            <h1>{title}</h1>
            {
              !!subtitle && <p className='d-none d-lg-block'>{subtitle}</p>
            }
          </div>
          <div className='col-4 text-end'>
            <a className='text-white d-block d-sm-none' href='/'>
            <i className='bi bi-question-circle'></i>
            </a>
            <button type='button' className='header-button btn btn-outline-light d-none d-sm-block' href='/'>
              <i className='bi bi-question-circle'></i>
              HELP
            </button>
          </div>
        </div>
      </div>
  </header>
)
