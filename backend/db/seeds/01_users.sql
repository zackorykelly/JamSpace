INSERT INTO users (full_name, email, password) VALUES
('Brooklynn Perez', 'brooklynnp@gmail.com', 'password' ),
('Duncan Wilcox', 'duncanw@gmail.com', 'password'),
('Malik Rios', 'malikr@gmail.com', 'password'),
('Miguel Stewart', 'miguels@gmail.com', 'password'),
('Corinne Phillips', 'corinnep@gmail.com', 'password'),
('Greyson Carroll', 'greysonc@gmail.com', 'password'),
('Madison Smith', 'madisons@gmail.com', 'password'),
('Hamza Richardson', 'hamzar@gmail.com', 'password'),
('Corbin Gillespie', 'corbing@gmail.com', 'password'),
('Miah Gentry', 'miahg@gmail.com', 'password'),
('Nylah Hall', 'nylahh@gmail.com', 'password'),
('Hayley Sanders', 'hayleys@gmail.com', 'password'),
('Sawyer Shepard', 'sawyers@gmail.com', 'password'),
('Elise Fowler', 'elisef@gmail.com', 'password');

INSERT INTO projects (name, description, created_at) VALUES
('Simple riffs', 'A development project just to get some of my ideas that come to me out there so we can mash them up', '2020-12-16'::timestamp),
('Mega ideas', 'I like piano, you like guitar lets whip smt up for the gig', '2020-12-20'::timestamp),
('GH highschool project', 'Hello classmates record and submit your records to this project', '2020-12-24'::timestamp),
('Band ideas', 'composition ideas for the London marching band', '2021-01-02'::timestamp),
('Duncans project', 'My simple ideas', '2021-01-12'::timestamp),
('Potato room', 'This is for all the boy and girls out there who like music and french fries', '2021-01-16'::timestamp),
('Dollar Bling', 'These are the ideas of where money is made', '2021-01-30'::timestamp),
('Aqua 6', 'We got the main meoldy down try and add some beats to the melody and see what we can come up with for the North American tour', '2021-02-15'::timestamp),
('The blues', 'Just a simple project to see what we can mash ontop of a chill blues', '2021-03-13'::timestamp),
('Jaz comp', 'just playin around with some swing', '2021-03-21'::timestamp),
('Purdie Shuffle', 'My final piece for the grand hall preformance', '2020-04-19'::timestamp);

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

-- need to add location to this table I left it out for now as we dont have any files for paths created for the project files
INSERT INTO files (project_id, name, description, created_at) VALUES
(1, 'riff 1', 'funky beat from sam', '2020-12-16'::timestamp), (1, 'riff 2', 'chill beat from james', '2020-12-17'::timestamp), (1, 'riff 3', 'rock beat from last years preformance', '2020-12-18'::timestamp),
(2, 'the matrix beat', 'the feels I get while watching neo', '2020-12-20'::timestamp), (2, 'the inseption beat', 'the feels I get while watching leo', '2020-12-24'::timestamp);



-- this table is a project for strach can add data in here while implementing the feature

-- INSERT INTO comments_stretch (user_id, file_id, comment, created_at) VALUES
-- (1, 3, 'change the d# to a c', 2020-12-18'::timestamp)