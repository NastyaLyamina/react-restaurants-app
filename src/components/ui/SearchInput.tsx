import './SearchInput.css';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SearchInput = ({ value, onChange }: Props) => (
  <div className="search-input-container">
    <input
      type="text"
      placeholder="Поиск ресторана..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  </div>
);