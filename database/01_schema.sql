GRANT ALL PRIVILEGES ON *.* TO `user`@`%`;
FLUSH PRIVILEGES;
CREATE DATABASE IF NOT EXISTS test_db;
USE test_db;

CREATE TABLE IF NOT EXISTS web_images (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    image_name VARCHAR(100) NOT NULL,
    image_description VARCHAR(255) NULL,
    image_link VARCHAR(255) NOT NULL,
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP    NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_name (image_name)
);

INSERT INTO web_images(image_name, image_description, image_link) VALUES
('test1', 'test', 'https://picsum.photos/id/1/200/300');



