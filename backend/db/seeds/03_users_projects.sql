INSERT INTO users_projects (project_id, user_id, owner_stretch, created_at) VALUES
(1, 2, true, '2020-12-16'::timestamp), (1, 3, false, '2020-12-16'::timestamp), (1, 5, false, '2020-12-16'::timestamp),
(2, 1, true, '2020-12-20'::timestamp), (2, 2, false, '2020-12-20'::timestamp), (2, 3, false, '2020-12-20'::timestamp), (2, 5, false, '2020-12-20'::timestamp),
(3, 7, true, '2020-12-24'::timestamp), (2, 8, false, '2020-12-24'::timestamp),
(4, 5, true, '2021-01-02'::timestamp), (4, 6, false, '2021-01-02'::timestamp), (4, 9, false, '2021-01-02'::timestamp), (4, 10, false, '2021-01-02'::timestamp),
(5, 2, true, '2021-01-12'::timestamp),
(6, 13, true, '2021-01-16'::timestamp), (6, 12, false, '2021-01-16'::timestamp), (6, 14, false, '2021-01-16'::timestamp),
(7, 2, true, '2021-01-30'::timestamp), (7, 1, false, '2021-01-30'::timestamp), (7, 6, false, '2021-01-30'::timestamp),
(8, 9, true, '2021-02-15'::timestamp), (8, 12, false, '2021-02-15'::timestamp), (8, 2, false, '2021-02-15'::timestamp),
(9, 10, true, '2021-03-13'::timestamp), (9, 11, false, '2021-03-13'::timestamp),
(10, 10, true, '2021-03-21'::timestamp),
(11, 10, true, '2020-04-19'::timestamp);