import styles from '../modules/Business.module.css';

function Business({business}) {
  const { image, name, address, city, state, zipcode, category, rating, reviewCount } = business;
  
  return (
    <div className={styles.business}>
      <div className={styles['image-container']}>
        <img src={image} alt={name} className={styles.img} />
      </div>
      <h2>{name}</h2>
      <div className={styles['business-information']}>
        <div className={styles['business-address']}>
          <p>{address}</p>
          <p>{city},</p>
          <p>{state} {zipcode}</p>
        </div>
        <div className={styles['business-reviews']}>
          <h3>{category}</h3>
          <h3 className={styles.rating}>{rating}/5 ★</h3>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
