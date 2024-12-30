--Active postgresql://idpuser:idppassword@127.0.0.1:5432/idp

GRANT ALL PRIVILEGES ON DATABASE idp TO idpuser;

CREATE TABLE powerUsage2(  
    id serial PRIMARY KEY,
    name VARCHAR(255),
    timestamp TIMESTAMP,
    usage FLOAT
);

-- @block 
CREATE TABLE energy_data (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    vrms FLOAT,
    irms FLOAT,
    power FLOAT,
    kwh FLOAT
);
