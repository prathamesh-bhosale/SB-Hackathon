
create table user(
    uid  INTEGER PRIMARY KEY auto_increment,
    name VARCHAR(20),
    email VARCHAR(50),
    password VARCHAR(100),
    phone VARCHAR(15),
    createdTimestamp DATETIME default CURRENT_TIMESTAMP
);

create table category (
    cid integer primary key auto_increment,
    ctitle varchar(20),
    description varchar(1000)
);

create table blog(
    bid  INTEGER PRIMARY KEY auto_increment,
    btitle VARCHAR(20),
    bcontent VARCHAR(1000),
    uid  INTEGER,
    cid  INTEGER,
    isDeleted INTEGER(1) default 0,
    createdTimestamp DATETIME default CURRENT_TIMESTAMP,
    FOREIGN KEY (uid) REFERENCES user(uid),
    FOREIGN KEY (cid) REFERENCES category(cid)
);


    -- bid  
    -- btitle 
    -- bcontent 
    -- uid 
    -- cid  
    -- isDeleted 
    -- createdTimestamp 

    uid ,
    name ,
    email ,
    password ,
    phone ,
    createdTimestamp





















--  isDeleted integer(1) default 0, -- 0: not deleted, 1: deleted