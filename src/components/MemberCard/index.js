export const MemberCard = ({
  index,
  isPublisher,
  title,
  price,
  nonRefundable,
  description,
  requirements,
  activeIndex,
  error,
  ...props
}) => (
  <div
    className={`card ${(activeIndex === index) && 'card-active'} ${(!!activeIndex && activeIndex !== index) && 'card-faded'} ${error && 'card-error'}`}
    {...props}
  >
    <div className='card-header text-center'>
      <h4>{title}</h4>
      <h2>{ (price) ? `$${price.toFixed(2)}` : 'Free' }</h2>
      {
        !!(nonRefundable) && <p className='small'>non-refundable</p>
      }
      <p className='text-right'>
        {description}
      </p>
    </div>
    <div className='card-body'>
      <h5>Requirements</h5>
      <ul className='list-group'>
        {
          requirements.map((requirement, i) => (
            <li className='list-group-item' key={i}>
              {requirement}
            </li>
          ))
        }
      </ul>
    </div>
  </div>
)