import ClientUsage from './ClientUsage';
import AddressUsage from './AddressUsage';
import CategoryUsage from './CategoryUsage';
import CountryUsage from './CountryUsage';
import CustomerUsage from './CustomerUsage';
import EmailUsage from './EmailUsage';
import OrderUsage from './OrderUsage';
import ProductUsage from './ProductUsage';
import ZoneUsage from './ZoneUsage';

ClientUsage()
  .then(AddressUsage)
  .then(CategoryUsage)
  .then(CountryUsage)
  .then(CustomerUsage)
  .then(EmailUsage)
  .then(OrderUsage)
  .then(ProductUsage)
  .then(ZoneUsage)
  .catch(console.error);