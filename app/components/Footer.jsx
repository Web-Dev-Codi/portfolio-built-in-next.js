const date = new Date().getFullYear();

export default function Footer() {
  return (
    <main>
      <div className="footer">
            <div className="footer_items">
                <div className="contact_link">
                    <a href="#contact">Contact</a>
                </div>
                <div className="copyright_link">
                    <div className="copyright">
                        <p className="copy_para">Copyright &copy;
                            {date} Brian Cordisco All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
   </main>
  )
}
