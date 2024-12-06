const Filters = ({ setCategory }) => (
  <select onChange={(e) => setCategory(e.target.value)}>
    <option value="">All Categories</option>
    <option value="Tools">Tools</option>
    <option value="Food">Food</option>
    <option value="Transport">Transport</option>
  </select>
);

export default Filters;
