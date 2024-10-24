import React from 'react'

function Pagination({ meta, setPage }) {
  return (
    <div className="row text-center">
      <div className="col-12 mt-4">
        <div className="d-md-flex align-items-center text-center justify-content-between">
          <span className="text-muted me-3">
            Showing {meta.from} - {meta.to} out of {meta.total}
          </span>
          <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
            {meta.links.map(link => (
              <li
                key={link.label}
                className={`page-item ${link.active ? 'active' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => setPage(link?.url?.split('?page=')[1])}
                  className={`page-link`}
                >
                  {link.label.includes('Prev')
                    ? 'Prev'
                    : link.label.includes('Next')
                    ? 'Next'
                    : link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pagination
