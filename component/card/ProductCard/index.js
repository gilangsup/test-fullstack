import styles from './ProductCard.module.css'

export default function ProductCard({ id, name, image, price, qty, sku, handleRemove }) {
  
  return (
    <div className={styles.cardWrapper}>
      <div>
      <h3>{name}</h3>
      <img src={image} alt={name} width="auto"/>
      <h4>Kode barang : {sku}</h4>
      <h4>Quantity :{qty}</h4>
      <h4>Harga : Rp {price}</h4>
      <button onClick={() => handleRemove(id)}>Remove</button>
      </div>
    </div>
  );
};