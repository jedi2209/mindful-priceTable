interface PackageInfoProps {
  price?: number | null;
  value?: number | null;
  popular?: boolean;
  currency?: string;
  buttonText?: string;
  link?: string | null;
}

export const PackageInfo: React.FC<PackageInfoProps> = ({
  price = null,
  value = null,
  popular = false,
  currency = '€',
  buttonText = 'Get started',
  link = null,
}) => (
  <div className="info">
    {popular && <div className="popular">Popular</div>}
    <div className="amount">
      {price} {currency}
    </div>
    <div className="billing-msg">
      value {value} {currency}
    </div>
    <button type="button">{buttonText}</button>
  </div>
);