import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { fetchJobs } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const MainJobPage = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Esplora le offerte di lavoro per categoria</Card.Title>

        <div className="d-flex gap-3 mb-3 rounded-3 ">
          <div className=" d-flex align-items-end">
            {" "}
            <div>
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADoCAMAAABVRrFMAAAAflBMVEX///8BAQEAAAD5+flubm4QEBDs7OyysrLh4eEiIiIeHh6vr6+4uLjp6el2dnb8/PxeXl5MTEzT09NWVlbMzMxBQUGgoKBmZmZwcHA4ODjy8vJPT080NDSjo6N/f39hYWGHh4fExMQqKiqOjo6WlpY+Pj5GRkYWFhbb29stLS1MhcFiAAAKRUlEQVR4nO2diZqjKhCFTanpzkY0Zl+M2bvf/wVHE3GjUNwi6eHM3DvfjJJwBH6hWFrTlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUutD8a951FlrRGAJ9dZ2N5rX0bfX8/5ZdZ6RpnXxfgQBOXWelWU1CY4G1SdeZaVLTX2rMt3aedp2dBrWKjfnWjl1npzldIeUMrl1nqCmdUsb+EEUmGWN/hyL7rDHf2u9foMiKKbLA2qrrbNXXEjP2FygyR439AYqw9PgrFEHoEVnbfzJFDL6xz6bIMs9Y74NHNDx65FBE/w7VRX6FxadHbC1DERciHbrJtJA2RcYYiqwhIXmrai49ImtJinwnCxlA7yzr+cL7Hmx9TBTNOD3WkbStFdEjNhBH6j7CWV/QWIoiH+HsJmrMt7ChiT7B2Vq4yAIPRpjqA5wdyhiLKSK/M1F6xCZeFJHeGZcewL/QDxJK74xDD9/WL8/biyKyO8PpAXD72mqTrxvu7UkRyZ3h9IjjHry4yEF2Zzg9kl33EeeOudzOtpzK5ibucfFbYCu1swWeazt1k43fdJfZGcFrmrlN3bU1cWsDeZ3x6DHL3PfDqbPpVBI5m3GMjZg7cYpkksnjTIQeVDhFZHXGoccdvRmniJzOxOhBxaGIjM5E6UGFN0oJnYnTg6qAIrI42/bwRkZy0uRTRBZn9zL0yE8klzMOPXo4PahyKSKHM173nUcPqjyKSOGsPD2ocigig7Mq9KDiU0QGZxx6LGoklsOZm61RzzBOGI4q1LPAscBP986YpgL2yoTkRES+/EYK99WQsda5M4YeAI5xKzNl6T8aZ8V2kLt2xr6SACxyE6IHFQGHyOcMyxEhm1upD7mt18igJhM8ebMYegQ5Og9MMXpQ9QcDtp35jwgbsr5J/NBhOVV/1bckPFBTZcFD2cFdy+IF13B6bGej5XI5muEVleAfxRmQty1OQBSjR3+5iNZ5LJaYuVJBlJaF0QPve/TJ01J43RdB7uF8WgcU+RKmxyHbeULXHvGmOt5OEWF66BbaKbSYFTo8ivy8xxAVjx5r5kZ8KhBgw8BBDopw6LHJ3jflLgyBDVNq+L3v7Yvw6MEsDV7xjGFLUiWgiDA98mKKCBw6pwiPHsyKRM4cRpSAaUEdU0R/8JcHpOUVBLg9JsW6U4rsBOmh6YkSQLeQsIXGIc57KOKJ0sNvjtFF2P8mV9KGF5AG1CFFxlG20rPKyMjFiu40YbWCx3N37iuEF3a1HDZRiiKJ3aGtb1f+iY2l6hqynlkP3+YwcL370Vp5xt4lhmut7bUTXjGRtcIJiiS+o3WKRPQAMEg8EEboEa9qh53hEMsgN+/uWsQhZEeoMzTWEVMEjiTafgKPdinixM/wRqLWDnvs3nn0EBbu2rIexHfmEDvhrIdvaNpECTdGjCvYtWnMS9SOtRHnAN2WRBeuwMYvKutIHOrMjp2hrScqbL91JpwhL4nGNE42AbLe0AzgcY8Rzb5Djn5t9Kiz9dGNnOG9i5AivrNkUKtFimR2ClDM8XZDRGU2IEfDcVYrsljbxt2wjbjMxnjSJbUGvdRXtkQRPR06i0bJvM1Ws8TrLKmN49GS4Ea5DEh9B/2glijipL4l+jbuBrnEWQWvXIZ/Waws+j7g7huc4ptq2qGIeN+DaoDmLvGWgiF32yC+EaoViow5X5WzERXv3iZTY6/BULwRDadlVtc354vyNg+fyu+sS4i3LLfhiQwdCbz3cujxEqc6RqmHuanx8Tg8mt29xaFHwSb9Q4Gz/DD5FN/Yi3Wjq+tSmh4vnXPH1EVHoHC2UzZJkQr0eClvH4nAlE3rFKlCj1BXrrUayRujiI6DQOzQGd5+LWCDrpg4FBk2QxGrEj2oOEuyxIyljiZKJm+EIjx6iNaIJbvaA8QP0WixL1KZHpFmm7S3oFMsPpmJv+4boEgNejzVD3LwtacBq+ef+2CcdRI9RKMlikwH6JYx0SOr9Eu44Xvm3cIxzM17lpcOcBHEAEYR/4NqUsSC4S9rTfSYsdMjMQm4nczmswkdYI38K6ZYjUYoAqZfC2pR5BKsW2E6EoI1YfrEIpzRi0Fu/Q8XekLIsVJBGAEuJZxkdApqj5vtvgnSo78JWxa9e05cQof7p/DaXqi1MRSBM3GgBkUmQbtwjYwzwWf1QyMYUUw+mIenSWlICnpCoY0MRfy3oeVAdYr49AgmlK1MbQRLJHE8ExWtV/GfEJ3WSF4VsnbM5MG2gmUWVSliUUxnKoLIpyWbRjhy1p8x/VfixAkbYg9+mn28YXCrEkXqvEdSXU062PF77mHxpZAAA5GAFP5e7VWhCO/dL0SPdFeTdoWWtMmnZwzFqnet/CTFG/UJPaNDtsHr4T+/RmR69rLQEjReHSp5IFi2Xpd6vH3I6pV1Nwx2H5jrQrnjjDkG5Q4EO3I+RYhFDpNzeH777TVzOc0GjUEsQKrXedpU9Xqhk35WrzLp97e514tUt3euVW6t0/HoqS9W9N9zr4+K+hS1KVKVHmu2FpZUTsz4qQueMWGKcOpz4VsRj7aWEDyKvqIeRSrToyAkLOAsP2is8aNNQhSpTo83OKtDkRpxh3c4q06ROn2PtzirTBGUHoIj8/c407DluwEH8lMds4OWEsbe5YxnLTfqNLMfx+wKYRB+yRc5w55aFWcB5LDnnzcDsnQHHrOCwBIdkxdNBC6sgsMKRJ1p30HdYsI+eQXw7T58ZykR8VhDvjP/ERn4ToryzvycErYHkxt36K+8+M7exjuVCTQUlZlNcne9l3Lmv7RP3iY5anCKIurTCT1edlI2fFJUZsRo0tnTXZTZ71bPHi0qs/2m3pR8d3obG9+ud73P3i/lTDmTR8qZciaPlDPlTB4pZ8qZPPrzzorGKogjuoZCbmdI7KXQGN2IIrmzIyk5KQNWuAJKbmcAi6IQFVNkt/BUKNmdGUaJn2LxTLEyPsMZIWWdrcknOOuB2Ss6tzZrrRemkNxZcYgKKTXJ2ZiJm1eQrM7OZl3h61eV2tHUNZqRK9vPVfyu3caouj5qMyvOysrSktLZHy2zbWPOujkkL096M+rahpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSktL/rcZm9GST1sjssoxKOoOGZtHlUOQsKMCfVHF2mS0h4bWQXtWiuy5X0OB6AY9Ynu09vNqnfbQtuJ8HA/B/35w92PbvzRluTDtaNRo5u+rfV23Z71+1uTaba7+cn/8kkcCyvd3FWQ931hEcY79YWysrXlsZOds53yPN3vUP2q5vzPRfDT8HXiLBGczB0PKLbWPC4rzfBz+9xWRroz2djbTd9OegOX0ym8rvjEd7ej1yNl+ORtrcO40+xBnAwl7dbccBa3G0dsb9trfvK9tg25mnTcbaVZt8aZZOfuZb2Z31YDn2/F/j83V5GHlX9/S7vBy8i5d1lilci2j4GcfyCB6m/9s0h8OeOTQfptszzYH/J+PstdPh9T//eczwH0UmkwTbGZLqXTlsSf9Hv/Fv6R/+AqBD/GI1aAAAAABJRU5ErkJggg=="
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <span>Da Remoto</span>
          </div>

          <div className=" d-flex align-items-end">
            {" "}
            <div>
              <img
                src="data:image/png;base64,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"
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <span>Piccole imprese</span>
          </div>
        </div>

        <hr />

        <Card.Text>
          {loading && <p>Caricamento offerte...</p>}
          {error && <p>Errore nel caricamento: {error}</p>}
          {jobs &&
            jobs.slice(0, 4).map((job) => {
              const formattedDate = new Intl.DateTimeFormat("it-IT", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(job.publication_date));

              return (
                <div key={job._id}>
                  <strong>{job.company_name}</strong> - {job.title}
                  <div className="d-flex">
                    <p>{formattedDate}</p>
                  </div>
                </div>
              );
            })}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MainJobPage;
