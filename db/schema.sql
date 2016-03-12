DROP TABLE if exists beverages;

CREATE TABLE beverages (
  bev_id serial PRIMARY KEY UNIQUE,
  bev_name text,
  price numeric
);
