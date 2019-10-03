-- USER SQL
CREATE USER mti IDENTIFIED BY cotinet2013 
DEFAULT TABLESPACE "USERS"
TEMPORARY TABLESPACE "TEMP";

-- QUOTAS

-- ROLES

-- SYSTEM PRIVILEGES
GRANT CREATE JOB TO mti ;
GRANT DROP ANY CONTEXT TO mti ;
GRANT UPDATE ANY CUBE TO mti ;
GRANT DROP ANY TRIGGER TO mti ;
GRANT MANAGE ANY FILE GROUP TO mti ;
GRANT ALTER PUBLIC DATABASE LINK TO mti ;
GRANT MANAGE FILE GROUP TO mti ;
GRANT ALTER ANY INDEX TO mti ;
GRANT DROP ANY SEQUENCE TO mti ;
GRANT ALTER PROFILE TO mti ;
GRANT UNDER ANY TABLE TO mti ;
GRANT CREATE ASSEMBLY TO mti ;
GRANT DROP ANY LIBRARY TO mti ;
GRANT ALTER ANY EDITION TO mti ;
GRANT CREATE ROLE TO mti ;
GRANT CREATE LIBRARY TO mti ;
GRANT DROP ROLLBACK SEGMENT TO mti ;
GRANT CREATE TRIGGER TO mti ;
GRANT ALTER ANY PROCEDURE TO mti ;
GRANT ADMINISTER DATABASE TRIGGER TO mti ;
GRANT DROP ANY MEASURE FOLDER TO mti ;
GRANT CREATE ANY PROCEDURE TO mti ;
GRANT ALTER ANY OUTLINE TO mti ;
GRANT EXECUTE ANY INDEXTYPE TO mti ;
GRANT CREATE ANY DIRECTORY TO mti ;
GRANT ALTER ANY RULE SET TO mti ;
GRANT ALTER ANY MINING MODEL TO mti ;
GRANT DEBUG CONNECT SESSION TO mti ;
GRANT CREATE ANY MINING MODEL TO mti ;
GRANT ALTER SESSION TO mti ;
GRANT CREATE MATERIALIZED VIEW TO mti ;
GRANT MERGE ANY VIEW TO mti ;
GRANT CREATE ANY INDEX TO mti ;
GRANT CREATE DIMENSION TO mti ;
GRANT EXECUTE ANY RULE SET TO mti ;
GRANT ALTER ANY MATERIALIZED VIEW TO mti ;
GRANT AUDIT SYSTEM TO mti ;
GRANT CREATE OPERATOR TO mti ;
GRANT MANAGE ANY QUEUE TO mti ;
GRANT ALTER ANY SQL PROFILE TO mti ;
GRANT GRANT ANY OBJECT PRIVILEGE TO mti ;
GRANT CREATE INDEXTYPE TO mti ;
GRANT AUDIT ANY TO mti ;
GRANT DEBUG ANY PROCEDURE TO mti ;
GRANT CREATE ANY MEASURE FOLDER TO mti ;
GRANT CREATE ANY SEQUENCE TO mti ;
GRANT CREATE MEASURE FOLDER TO mti ;
GRANT UPDATE ANY CUBE BUILD PROCESS TO mti ;
GRANT CREATE VIEW TO mti ;
GRANT ALTER DATABASE LINK TO mti ;
GRANT ALTER ANY ASSEMBLY TO mti ;
GRANT CREATE ANY EVALUATION CONTEXT TO mti ;
GRANT SELECT ANY MINING MODEL TO mti ;
GRANT DELETE ANY CUBE DIMENSION TO mti ;
GRANT ALTER ANY TABLE TO mti ;
GRANT CREATE SESSION TO mti ;
GRANT CREATE RULE TO mti ;
GRANT BECOME USER TO mti ;
GRANT SELECT ANY TABLE TO mti ;
GRANT INSERT ANY MEASURE FOLDER TO mti ;
GRANT CREATE ANY SQL PROFILE TO mti ;
GRANT FORCE ANY TRANSACTION TO mti ;
GRANT DELETE ANY TABLE TO mti ;
GRANT ALTER ANY SEQUENCE TO mti ;
GRANT SELECT ANY CUBE DIMENSION TO mti ;
GRANT CREATE ANY EDITION TO mti ;
GRANT CREATE EXTERNAL JOB TO mti ;
GRANT DROP ANY MATERIALIZED VIEW TO mti ;
GRANT CREATE ANY CUBE BUILD PROCESS TO mti ;
GRANT FLASHBACK ANY TABLE TO mti ;
GRANT DROP ANY RULE SET TO mti ;
GRANT BACKUP ANY TABLE TO mti ;
GRANT ALTER ANY CUBE TO mti ;
GRANT CREATE TABLE TO mti ;
GRANT EXECUTE ANY LIBRARY TO mti ;
GRANT DROP ANY OUTLINE TO mti ;
GRANT EXECUTE ASSEMBLY TO mti ;
GRANT CREATE ANY DIMENSION TO mti ;
GRANT DROP ANY TABLE TO mti ;
GRANT ALTER ANY CLUSTER TO mti ;
GRANT EXECUTE ANY CLASS TO mti ;
GRANT DROP ANY DIMENSION TO mti ;
GRANT CREATE ANY RULE SET TO mti ;
GRANT SELECT ANY SEQUENCE TO mti ;
GRANT UNDER ANY TYPE TO mti ;
GRANT MANAGE TABLESPACE TO mti ;
GRANT DROP ANY OPERATOR TO mti ;
GRANT CREATE ANY OPERATOR TO mti ;
GRANT EXEMPT IDENTITY POLICY TO mti ;
GRANT CREATE TYPE TO mti ;
GRANT CREATE TABLESPACE TO mti ;
GRANT SELECT ANY TRANSACTION TO mti ;
GRANT DELETE ANY MEASURE FOLDER TO mti ;
GRANT CREATE ANY CUBE TO mti ;
GRANT LOCK ANY TABLE TO mti ;
GRANT CREATE EVALUATION CONTEXT TO mti ;
GRANT DROP ANY TYPE TO mti ;
GRANT ADVISOR TO mti ;
GRANT CREATE PUBLIC DATABASE LINK TO mti ;
GRANT ANALYZE ANY TO mti ;
GRANT DROP ANY RULE TO mti ;
GRANT INSERT ANY CUBE DIMENSION TO mti ;
GRANT CREATE ROLLBACK SEGMENT TO mti ;
GRANT CREATE ANY JOB TO mti ;
GRANT ALTER USER TO mti ;
GRANT QUERY REWRITE TO mti ;
GRANT SELECT ANY DICTIONARY TO mti ;
GRANT CREATE PUBLIC SYNONYM TO mti ;
GRANT GLOBAL QUERY REWRITE TO mti ;
GRANT ALTER ANY CUBE DIMENSION TO mti ;
GRANT CREATE ANY CUBE DIMENSION TO mti ;
GRANT DROP ANY CLUSTER TO mti ;
GRANT CREATE ANY RULE TO mti ;
GRANT UPDATE ANY CUBE DIMENSION TO mti ;
GRANT ADMINISTER RESOURCE MANAGER TO mti ;
GRANT CREATE ANY SYNONYM TO mti ;
GRANT DROP ANY SYNONYM TO mti ;
GRANT DROP ANY MINING MODEL TO mti ;
GRANT EXECUTE ANY PROCEDURE TO mti ;
GRANT CREATE SYNONYM TO mti ;
GRANT EXECUTE ANY PROGRAM TO mti ;
GRANT EXECUTE ANY TYPE TO mti ;
GRANT ON COMMIT REFRESH TO mti ;
GRANT CREATE SEQUENCE TO mti ;
GRANT COMMENT ANY MINING MODEL TO mti ;
GRANT ADMINISTER SQL TUNING SET TO mti ;
GRANT CREATE ANY INDEXTYPE TO mti ;
GRANT DROP ANY INDEX TO mti ;
GRANT RESTRICTED SESSION TO mti ;
GRANT DEQUEUE ANY QUEUE TO mti ;
GRANT ANALYZE ANY DICTIONARY TO mti ;
GRANT ALTER ANY INDEXTYPE TO mti ;
GRANT ADMINISTER ANY SQL TUNING SET TO mti ;
GRANT CREATE USER TO mti ;
GRANT EXECUTE ANY OPERATOR TO mti ;
GRANT CREATE CUBE BUILD PROCESS TO mti ;
GRANT CREATE PROFILE TO mti ;
GRANT ALTER ANY ROLE TO mti ;
GRANT UPDATE ANY TABLE TO mti ;
GRANT ALTER ANY LIBRARY TO mti ;
GRANT DROP ANY VIEW TO mti ;
GRANT CREATE ANY CLUSTER TO mti ;
GRANT EXECUTE ANY RULE TO mti ;
GRANT ALTER TABLESPACE TO mti ;
GRANT UNDER ANY VIEW TO mti ;
GRANT EXECUTE ANY ASSEMBLY TO mti ;
GRANT GRANT ANY PRIVILEGE TO mti ;
GRANT ALTER ANY TRIGGER TO mti ;
GRANT CREATE ANY VIEW TO mti ;
GRANT EXPORT FULL DATABASE TO mti ;
GRANT ALTER ANY EVALUATION CONTEXT TO mti ;
GRANT FLASHBACK ARCHIVE ADMINISTER TO mti ;
GRANT IMPORT FULL DATABASE TO mti ;
GRANT CREATE ANY OUTLINE TO mti ;
GRANT COMMENT ANY TABLE TO mti ;
GRANT CREATE DATABASE LINK TO mti ;
GRANT DROP PUBLIC SYNONYM TO mti ;
GRANT DROP USER TO mti ;
GRANT CHANGE NOTIFICATION TO mti ;
GRANT CREATE MINING MODEL TO mti ;
GRANT INSERT ANY TABLE TO mti ;
GRANT DROP PROFILE TO mti ;
GRANT CREATE ANY MATERIALIZED VIEW TO mti ;
GRANT CREATE RULE SET TO mti ;
GRANT EXEMPT ACCESS POLICY TO mti ;
GRANT MANAGE SCHEDULER TO mti ;
GRANT READ ANY FILE GROUP TO mti ;
GRANT FORCE TRANSACTION TO mti ;
GRANT DROP ANY CUBE BUILD PROCESS TO mti ;
GRANT ALTER ANY TYPE TO mti ;
GRANT DROP ANY PROCEDURE TO mti ;
GRANT DROP ANY INDEXTYPE TO mti ;
GRANT DROP ANY SQL PROFILE TO mti ;
GRANT UNLIMITED TABLESPACE TO mti ;
GRANT DROP ANY ROLE TO mti ;
GRANT ALTER ANY DIMENSION TO mti ;
GRANT DROP ANY CUBE DIMENSION TO mti ;
GRANT DROP ANY CUBE TO mti ;
GRANT CREATE ANY TRIGGER TO mti ;
GRANT DROP ANY ASSEMBLY TO mti ;
GRANT CREATE ANY TABLE TO mti ;
GRANT ADMINISTER SQL MANAGEMENT OBJECT TO mti ;
GRANT DROP ANY DIRECTORY TO mti ;
GRANT ENQUEUE ANY QUEUE TO mti ;
GRANT DROP ANY EVALUATION CONTEXT TO mti ;
GRANT CREATE ANY ASSEMBLY TO mti ;
GRANT CREATE ANY TYPE TO mti ;
GRANT CREATE CLUSTER TO mti ;
GRANT CREATE ANY CONTEXT TO mti ;
GRANT EXECUTE ANY EVALUATION CONTEXT TO mti ;
GRANT RESUMABLE TO mti ;
GRANT CREATE ANY LIBRARY TO mti ;
GRANT DROP ANY EDITION TO mti ;
GRANT CREATE PROCEDURE TO mti ;
GRANT SELECT ANY CUBE TO mti ;
GRANT GRANT ANY ROLE TO mti ;
GRANT ALTER ANY RULE TO mti ;
GRANT CREATE CUBE DIMENSION TO mti ;
GRANT ALTER ANY OPERATOR TO mti ;
GRANT CREATE CUBE TO mti ;
GRANT ALTER RESOURCE COST TO mti ;
GRANT ALTER ROLLBACK SEGMENT TO mti ;

commit;