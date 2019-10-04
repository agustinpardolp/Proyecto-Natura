CREATE TABLE naturaApp.address (
  id INT(11) NOT NULL AUTO_INCREMENT,
  code_CN VARCHAR(20) DEFAULT NULL,
  name_CN VARCHAR(255) DEFAULT NULL,
  detalhe_situacao_comercial VARCHAR(255) DEFAULT NULL,
  code_comercial_structure VARCHAR(255) DEFAULT NULL,
  name_comercial_structure VARCHAR(255) DEFAULT NULL,
  code_management VARCHAR(255) DEFAULT NULL,
  name_management VARCHAR(255) DEFAULT NULL,
  address_type VARCHAR(255) DEFAULT NULL,
  province VARCHAR(255) DEFAULT NULL,
  county VARCHAR(255) DEFAULT NULL,
  zip_code VARCHAR(255) DEFAULT NULL,
  town VARCHAR(255) DEFAULT NULL,
  neighborhood VARCHAR(255) DEFAULT NULL,
  number VARCHAR(255) DEFAULT NULL,
  street VARCHAR(255) DEFAULT NULL,
  complement VARCHAR(255) DEFAULT NULL,
  reference VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE naturaApp.consultant (
  id INT(11) NOT NULL AUTO_INCREMENT,
  code VARCHAR(20) NOT NULL,
  sector VARCHAR(20) NOT NULL,
  name VARCHAR(50) NOT NULL,
  identification VARCHAR(255) DEFAULT NULL,
  location VARCHAR(255) DEFAULT NULL,
  cod_superviser VARCHAR(20) NOT NULL,
  mail VARCHAR(255) DEFAULT NULL,
  profit DOUBLE DEFAULT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE naturaApp.management (
  id INT(11) NOT NULL AUTO_INCREMENT,
  manager VARCHAR(20) NOT NULL,
  sector VARCHAR(20) NOT NULL,
  superviser VARCHAR(50) DEFAULT NULL,
  cod_superviser VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE naturaApp.orderitem (
  cod_order INT(11) NOT NULL,
  cod_product VARCHAR(20) NOT NULL,
  quantity INT(11) NOT NULL,
  extra INT(11) DEFAULT NULL,
  photo_quantity INT(11) NOT NULL,
  gift INT(11) NOT NULL DEFAULT 0
)
CREATE TABLE naturaApp.product (
  id INT(11) NOT NULL AUTO_INCREMENT,
  code VARCHAR(10) NOT NULL,
  description VARCHAR(50) NOT NULL,
  price DOUBLE DEFAULT NULL,
  points INT(11) DEFAULT NULL,
  list_order INT(11) DEFAULT NULL,
  add_points INT(11) DEFAULT NULL,
  add_cases INT(11) DEFAULT NULL,
  add_dif_cases INT(11) DEFAULT NULL,
  profit DOUBLE DEFAULT 0,
  event_code VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE naturaApp.sector_event (
  id INT(11) NOT NULL AUTO_INCREMENT,
  sector VARCHAR(20) NOT NULL,
  event_code VARCHAR(50) NOT NULL,
  load_from DATETIME NOT NULL,
  load_to DATETIME NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE naturaApp.paymentNotification (
  Id INT(11) NOT NULL AUTO_INCREMENT,
  PaymentId VARCHAR(20) NOT NULL,
  LiveMode INT(11) NOT NULL DEFAULT 0,
  Type VARCHAR(10) NOT NULL DEFAULT 'test',
  CreateDate DATETIME DEFAULT NULL,
  UpdateDate DATETIME DEFAULT NULL,
  UserId VARCHAR(10) NOT NULL,
  APIVersion VARCHAR(10) DEFAULT NULL,
  Action VARCHAR(50) DEFAULT 'test.created',
  Data LONGTEXT DEFAULT NULL,
  Replicate INT(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (Id)
)

CREATE TABLE naturaApp.product_gift (
  id INT(11) NOT NULL AUTO_INCREMENT,
  code VARCHAR(10) NOT NULL,
  description VARCHAR(30) NOT NULL,
  img_type VARCHAR(5) NOT NULL DEFAULT 'jpg',
  min_points INT(11) DEFAULT NULL,
  max_points INT(11) DEFAULT NULL,
  min_dif_cases INT(11) DEFAULT NULL,
  max_dif_cases INT(11) DEFAULT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE naturaApp.superviser (
  id INT(11) NOT NULL AUTO_INCREMENT,
  code VARCHAR(20) NOT NULL,
  name VARCHAR(50) NOT NULL,
  mail VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE naturaApp.parameter_data (
  id INT(11) NOT NULL AUTO_INCREMENT,
  param_name VARCHAR(50) NOT NULL,
  event_code VARCHAR(50) DEFAULT NULL,
  sector VARCHAR(20) DEFAULT NULL,
  value VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (id)
)
