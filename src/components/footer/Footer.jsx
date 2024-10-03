import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-navFooterGray py-14 text-textSecondary ' >
      <div className='max-w-screen-xl mx-auto ' >
        <footer>
          <div className='grid grid-cols-4 ' >
            <div>
              <nav className='flex flex-col' >
                <h6 className="footer-title">Services</h6>
                <NavLink className="link link-hover">Branding</NavLink>
                <NavLink className="link link-hover">Design</NavLink>
                <NavLink className="link link-hover">Marketing</NavLink>
                <NavLink className="link link-hover">Advertisement</NavLink>
              </nav>
            </div>
            <div>
              <nav className='flex flex-col' >
                <h6 className="footer-title">Company</h6>
                <NavLink className="link link-hover">About us</NavLink>
                <NavLink className="link link-hover">Contact</NavLink>
                <NavLink className="link link-hover">Jobs</NavLink>
                <NavLink className="link link-hover">Press kit</NavLink>
              </nav>
            </div>
            <div>
              <nav className='flex flex-col' >
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </nav>
            </div>
            <div>
              <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                  <label className="label">
                    <span className="label-text">Enter your email address</span>
                  </label>
                  <div className="join">
                    <input
                      type="text"
                      placeholder="username@site.com"
                      className="input input-bordered join-item" />
                    <button className="btn btn-primary join-item">Subscribe</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
