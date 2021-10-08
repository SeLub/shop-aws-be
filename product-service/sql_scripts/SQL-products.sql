create table products (
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
title text NOT NULL,
description text,
price int,
image_id text
);

create table stocks (
product_id uuid,
count int,
FOREIGN KEY ("product_id") REFERENCES "products" ("id")
);

create extension if not exists "uuid-ossp";

insert into products (title, description, price, image_id) values
('Lenovo IdeaPad 14.0 Laptop Intel Celeron N4020 Processor, 4GB DDR4 RAM, 64 GB SSD','This everyday laptop is powered by an Intel Celeron N4020 processor, 4GB DDR4 RAM, and 64 GB M.2 PCIe SSD storage.',256,'000054623'),
('GIGABYTE G5 KC - 15.6 FHD IPS Anti-Glare 144Hz - Intel Core i5-10500H - NVIDIA GeForce RTX 3060','NVIDIA GeForce RTX 30 Series Laptop GPUs with Boost Clock 1425 MHz and Maximum Graphics Power 105 W',1199,'000054602'),
('2021 Newest HP Premium 14-inch HD Laptop, Intel Dual-Core Processor Up to 2.8GHz','Stay connected to what matters most with long-lasting battery life and a thin and portable, micro-edge bezel design. Built to keep you productive and entertained from anywhere, the HP 14 diagonal laptop features reliable performance and an expansive display - letting you stream, surf and speed through tasks.',329,'000054603'),
('Newest HP 15.6 FHD Micro-Edge Business Laptop, Intel Celeron N4020, 8GB RAM, 128GB SSD, Wi-Fi, Webcam, HDMI','The HP Laptop is powered with the latest Intel Celeron N4020 Processor and 8GB high-bandwidth DDR4 memory, powerful processing for advanced multitasking, demanding computing, smooth gaming, multiple tabs browsing, and everyday tasks. 128GB PCIe NVMe M.2 SSD (15x faster than HDD, stay cool and quiet) offers ample storage, quick boot-up times, fast data access, and improves the overall performance.',399,'000054606'),
('2021 Newest Dell Inspiron 15 3000 Series 3593 Laptop','Memory is 8GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once. Hard Drive is 1TB Hard Disk Drive for ample storage space.',519,'000054608'),
('Lenovo IdeaPad 3 15 Intel i3-10110U 8GB 256GB SSD 15.6-inch Touch Screen Laptop','10th Gen Intel Core i3-10110U Dual-Core Processor 2.1GHz processor 4.1 GHz Turbo / 8GB DDR4 2666 SDRAM / 256GB NVMe Solid State Drive.',450,'000054611'),
('Alienware m17 R4, 17.3 inch FHD (Full HD) Gaming Laptop','17.3-inch FHD (Full HD 1920 x 1080) 360Hz 5ms 300-nits 100% sRGB color gamut with NVIDIA-GSYNC technology.',623,'000054613'),
('HP Chromebook x360 14a Laptop - Dual Core Intel Celeron N4020','Flex into whichever position is most comfortable with this convertible laptop, which is innovatively engineered to rotate 360 degrees.',415,'000054614'),
('Test Product 1', 'New Product 1 without Image', 70, NULL)

insert into stocks values
('9b3fdbb3-b78d-47d7-8eaf-cdf73128f9d9', 10),
('f9e20401-145d-4506-b7b9-b6e7b66e5374', 15),
('2dd9086e-80ab-4691-881f-6e04436977be', 7),
('43e4dd74-629f-41dd-a411-ddac23fd2e75', 4),
('06b25e3c-e2d7-41de-a83a-af1fb5393a46', 33),
('d1da91e0-2ecc-469b-9525-a8b93671a09d', 0),
('50080b01-3e07-4ddf-8421-7ca821d9a75c', 74),
('89da7309-e5ed-48a4-b4e6-ae47c947ae12', 74),
('c91e620b-e736-42dd-b55e-30446852e4f5', 10)
