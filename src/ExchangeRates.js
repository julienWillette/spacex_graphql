import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
{
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
      id
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data.launches);
    return data.launches.map(({id, launch_date_utc, launch_success, rocket, links, details}) => (
    <div key={id}>
      <p>
        {launch_date_utc}
    </p>
    <p>
        {launch_success ? "true": "false"}
    </p>
    <p>
        {rocket.rocket_name}
    </p>
    <p>
        {links.video_link}
    </p>
    <p>
        {details}
    </p>
    <hr></hr>
    </div>
  ));
}

export default ExchangeRates;
