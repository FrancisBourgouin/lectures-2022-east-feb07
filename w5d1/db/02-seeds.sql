INSERT INTO authors (name, description, funny) VALUES ('Francis', 'Oh boy, he is a teacher', TRUE); 
INSERT INTO authors (name, funny, description) VALUES ('Paul', TRUE, 'A student in march01');
INSERT INTO authors (name, funny, description) VALUES ('Mike', TRUE, 'A student in march01');
INSERT INTO authors (name, funny, description) VALUES ('Grigor', TRUE, 'A student in march29');
INSERT INTO authors (name, funny, description) VALUES ('Zack', TRUE, 'A student in march29');
INSERT INTO authors (name, funny, description) VALUES ('Anton', TRUE, 'A student in july 19');
INSERT INTO authors (name, funny, description) VALUES ('Aphy', TRUE, 'A student in july 19');
INSERT INTO authors (name, funny, description) VALUES ('Alex', TRUE, 'A student in july 19');
INSERT INTO authors (name, funny, description) VALUES ('Dusty', TRUE, 'A student in nov 22');
INSERT INTO authors (name, funny, description) VALUES ('Olga', TRUE, 'A student in nov 22');
INSERT INTO authors (name, funny, description) VALUES ('Luciana', TRUE, 'A student in nov 22');
INSERT INTO authors (name, funny, description) VALUES ('Andrew', TRUE, 'A student in feb 07');
INSERT INTO authors (name, funny, description) VALUES ('Noah', TRUE, 'A student in feb 07');
INSERT INTO authors (name, funny, description) VALUES ('Stefani', TRUE, 'A student in feb 07');
INSERT INTO authors (name, funny, description) VALUES ('Justin', TRUE, 'A student in feb 07');
INSERT INTO authors (name, funny, description) VALUES ('Ahmed', TRUE, 'A student in feb 07');
INSERT INTO authors (name, funny, description) VALUES ('Petit Poulet', TRUE, 'Not a student');


INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ('Knock knock, whos there, to who', 'no, to whom',3, 1),
  ('How is a bouncer at a club like a dish soap?', 'They both DETER GENTS', 5, 2),
  ('What do you call a belt made out of watches?', 'A waist of time.', 5, 3),
  ('Why do programmers mix hallowen and christmas', 'because OCT 31 === DEC 25',5, 1),
  ('You know you should knock on your fridge door before opening it', 'There might by a salad dressing',5, 4),
  ('Why did the chicken cross the road?', 'Because there was a green light',4.46, 7),
  ('What is small, green and goes up and down?', 'A green pea in an elevator',4.46, null),
  ('Did you hear about the monkeys who shared an Amazon account?', 'They were Prime mates.',4, 6),
  ('Did you recognize that 2022 sound like 2020 too', NULL ,3, 10),
  ('What do you call a fly without wings?', 'A walk',5, 9),
  ('What do you call a bear with no teeth?', 'A Gummy Bear',4, 11),
  ('What do you get when you cross a tater with a race car?', 'Crashed potato.',5, 12),
  ('What kind of dog is magic?', 'A Lab-ra-kadabra-dor',100, 13),
  ('Why don’t eggs tell jokes?', 'hey’d crack each other up',10, 14),
  ('Why do seagulls fly over the sea?', 'If they flew over the bay, they would be bagels. ',4, 15),
  ('Im afraid for the calendar...', 'Its days are numbered',3.5, 16),
  ('Secret Secret', 'I got a secret',3.5, NULL);
