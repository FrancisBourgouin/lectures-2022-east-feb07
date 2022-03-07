-- Basic SELECT

-- SELECT * FROM authors;
-- SELECT name FROM authors;


-- Single WHERE clause

-- SELECT * FROM jokes WHERE rating > 5;
-- SELECT * FROM jokes WHERE question LIKE 'What%';
-- SELECT * FROM jokes WHERE question LIKE '% do %';

-- Limits
-- SELECT * FROM jokes ORDER BY question DESC LIMIT 3;

-- LIKE vs = (sensitivity)

-- Multiple WHERE clauses

-- SELECT * FROM authors WHERE name LIKE '%p%' AND funny = true;
-- SELECT * FROM authors WHERE name ILIKE '%p%' AND funny = true;
-- SELECT * FROM authors WHERE LOWER(name) LIKE '%p%' AND funny = true;

-- Ordering results

-- Joining tables

-- Only the jokes that have an author
-- SELECT * FROM jokes 
--   JOIN authors 
--   ON jokes.author_id = authors.id;

-- Only the jokes that have an author + jokes without authors
-- SELECT * FROM jokes 
--   LEFT JOIN authors 
--   ON jokes.author_id = authors.id;

-- SELECT * FROM authors 
--   RIGHT JOIN jokes 
--   ON jokes.author_id = authors.id;
  
-- -- Only the jokes that have an author + author without jokes
-- SELECT * FROM jokes 
--   RIGHT JOIN authors 
--   ON jokes.author_id = authors.id;
  
-- -- EVERYTHING
-- SELECT * FROM jokes 
--   FULL OUTER JOIN authors 
--   ON jokes.author_id = authors.id;



-- Aliases

-- SELECT *, jokes.id AS joke_id 
--   FROM jokes 
--   JOIN authors 
--   ON jokes.author_id = authors.id;


-- SELECT 
--   jokes.question, 
--   jokes.answer, 
--   jokes.author_id, 
--   jokes.id AS joke_id, 
--   jokes.rating, 
--   authors.name, 
--   authors.description, 
--   authors.funny 
--   FROM jokes 
--   JOIN authors 
--   ON jokes.author_id = authors.id;


-- Aggregate functions (AVG, MIN, MAX, SUM)

-- SELECT AVG(rating) AS joke_rating_avg, author_id 
--   FROM jokes 
--   WHERE author_id IS NOT NULL
--   GROUP BY author_id
--   ORDER BY joke_rating_avg DESC;

-- SELECT MAX(rating) AS best_joke_rating, author_id 
--   FROM jokes 
--   WHERE author_id IS NOT NULL
--   GROUP BY author_id
--   ORDER BY best_joke_rating DESC;

-- Having

-- SELECT AVG(rating) AS joke_rating_avg, author_id 
--   FROM jokes 
--   WHERE author_id IS NOT NULL
--   GROUP BY author_id
--   HAVING AVG(rating) > 4
--   ORDER BY joke_rating_avg DESC;

-- Nested selects

-- SELECT * 
--   FROM authors
--   WHERE id IN
--     (SELECT author_id 
--       FROM jokes 
--       WHERE author_id IS NOT NULL
--       GROUP BY author_id
--       HAVING AVG(rating) > 4)
--   ;

-- Views!

CREATE VIEW cool_authors AS
  SELECT * 
    FROM authors
    WHERE id IN
      (SELECT author_id 
        FROM jokes 
        WHERE author_id IS NOT NULL
        GROUP BY author_id
        HAVING AVG(rating) > 4)
    ;