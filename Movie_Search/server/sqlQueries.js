
/* 
The following SQL queries were used to create the database. 
The database was created using PostgresSQL.

CREATE TABLE Movies (
    Movie_id INTIGER PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Director VARCHAR(255) NOT NULL,
    Budget DECIMAL(15, 2),
    Description TEXT,
    Genre VARCHAR(100),
    Year INT,
    Date DATE,
    Runtime INT,
    Summary TEXT
);

We populated the database with the following data.

INSERT INTO Movies (Movie_id, Title, Director, Budget, Description, Genre, Year, Date, Runtime, Summary) VALUES
(1, 'Inception', 'Christopher Nolan', 160000000, 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.', 'Science Fiction', 2010, '2010-07-16', 148, 'A skilled thief leads a team on a dangerous mission to infiltrate dreams.'),
(2, 'The Shawshank Redemption', 'Frank Darabont', 25000000, 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'Drama', 1994, '1994-09-22', 142, 'Two men form a deep bond while serving life sentences.'),
(3, 'The Godfather', 'Francis Ford Coppola', 6000000, 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', 'Crime', 1972, '1972-03-24', 175, 'A mafia family struggles with power and loyalty.'),
(4, 'Pulp Fiction', 'Quentin Tarantino', 8000000, 'The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.', 'Crime', 1994, '1994-10-14', 154, 'Four interrelated stories of crime in Los Angeles.'),
(5, 'The Dark Knight', 'Christopher Nolan', 185000000, 'When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'Action', 2008, '2008-07-18', 152, 'Batman faces his ultimate nemesis, the Joker.'),
(6, 'Forrest Gump', 'Robert Zemeckis', 55000000, 'The presidencies of Kennedy and Johnson, the Vietnam War, and more through the perspective of a man with an IQ of 75.', 'Drama', 1994, '1994-07-06', 142, 'A man with low IQ witnesses key moments in American history.'),
(7, 'The Matrix', 'Lana Wachowski', 63000000, 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.', 'Science Fiction', 1999, '1999-03-31', 136, 'A hacker uncovers the truth about his reality and existence.'),
(8, 'Fight Club', 'David Fincher', 63000000, 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.', 'Drama', 1999, '1999-10-15', 139, 'A man forms a fight club to escape his mundane life.'),
(9, 'The Lord of the Rings: The Fellowship of the Ring', 'Peter Jackson', 93000000, 'A meek Hobbit and eight companions set out on a journey to destroy a powerful ring.', 'Fantasy', 2001, '2001-12-19', 178, 'A group of adventurers embarks on a quest to destroy an evil ring.'),
(10, 'The Avengers', 'Joss Whedon', 220000000, 'Earth\'s mightiest heroes must come together to stop Loki and his alien army from enslaving humanity.', 'Action', 2012, '2012-05-04', 143, 'Superheroes team up to save the world from a powerful alien threat.'),
(11, 'Titanic', 'James Cameron', 200000000, 'A young couple falls in love aboard the ill-fated R.M.S. Titanic.', 'Romance', 1997, '1997-12-19', 195, 'A tragic love story unfolds aboard the Titanic.'),
(12, 'Gladiator', 'Ridley Scott', 103000000, 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', 'Action', 2000, '2000-05-05', 155, 'A Roman general seeks revenge after betrayal by the emperor.'),
(13, 'Saving Private Ryan', 'Steven Spielberg', 70000000, 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.', 'War', 1998, '1998-07-24', 169, 'A World War II mission to save a paratrooper behind enemy lines.'),
(14, 'Jurassic Park', 'Steven Spielberg', 63000000, 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.', 'Adventure', 1993, '1993-06-11', 127, 'A theme park with live dinosaurs turns deadly after a malfunction.'),
(15, 'Star Wars: A New Hope', 'George Lucas', 11000000, 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, and two droids to save the galaxy.', 'Science Fiction', 1977, '1977-05-25', 121, 'A young farm boy joins a rebellion to save the galaxy.'),
(16, 'Schindler\'s List', 'Steven Spielberg', 22000000, 'In Nazi-occupied Poland, a businessman saves the lives of more than a thousand Jewish refugees by employing them in his factories.', 'Drama', 1993, '1993-12-15', 195, 'A businessman risks his life to save Jews during the Holocaust.'),
(17, 'The Silence of the Lambs', 'Jonathan Demme', 19000000, 'A young FBI agent seeks the help of a brilliant but imprisoned cannibal to catch a serial killer.', 'Thriller', 1991, '1991-02-14', 118, 'An FBI agent consults a dangerous prisoner to catch a killer.'),
(18, 'Se7en', 'David Fincher', 33000000, 'Two detectives hunt a serial killer who uses the seven deadly sins as motives.', 'Thriller', 1995, '1995-09-22', 127, 'Two detectives pursue a killer inspired by the seven deadly sins.'),
(19, 'Avatar', 'James Cameron', 237000000, 'A paraplegic Marine is sent to the moon Pandora on a unique mission but becomes torn between following orders and protecting an alien civilization.', 'Science Fiction', 2009, '2009-12-18', 162, 'A Marine becomes an ally of an alien race while on a mission to exploit their planet.'),
(20, 'Interstellar', 'Christopher Nolan', 165000000, 'A group of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', 'Science Fiction', 2014, '2014-11-07', 169, 'Astronauts journey through a wormhole to find a new home for humanity.'),
(21, 'The Social Network', 'David Fincher', 40000000, 'The story of Facebook\'s founding by Mark Zuckerberg and the legal battles that followed its success.', 'Drama', 2010, '2010-10-01', 120, 'The rise of Facebook and the controversies surrounding its founder.'),
(22, 'Mad Max: Fury Road', 'George Miller', 150000000, 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland.', 'Action', 2015, '2015-05-15', 120, 'A woman rebels against a tyrannical leader in a post-apocalyptic world.'),
(23, 'The Wolf of Wall Street', 'Martin Scorsese', 100000000, 'The true story of Jordan Belfort, a stockbroker who engages in fraud and corruption on Wall Street.', 'Biography', 2013, '2013-12-25', 180, 'The rise and fall of a corrupt stockbroker.'),
(24, 'The Departed', 'Martin Scorsese', 90000000, 'An undercover cop and a mole in the police force attempt to identify each other while infiltrating an Irish gang.', 'Crime', 2006, '2006-10-06', 151, 'A police officer and a gangster play a dangerous cat-and-mouse game.'),
(25, 'The Prestige', 'Christopher Nolan', 40000000, 'Two rival magicians engage in a battle of tricks and deception.', 'Drama', 2006, '2006-10-20', 130, 'Two magicians compete to create the ultimate illusion.'),
(26, 'Whiplash', 'Damien Chazelle', 3300000, 'A young drummer pushes himself to the limit under the mentorship of a ruthless instructor.', 'Drama', 2014, '2014-10-10', 107, 'A drummer endures harsh training from a demanding music teacher.'),
(27, '12 Angry Men', 'Sidney Lumet', 340000, 'A jury holds out in determining the guilt or innocence of a defendant on the basis of reasonable doubt.', 'Drama', 1957, '1957-04-10', 96, 'A jury deliberates the guilt of a man accused of murder.'),
(28, 'The Green Mile', 'Frank Darabont', 60000000, 'The lives of guards on Death Row are affected by one of their charges: a convicted murderer with a mysterious gift.', 'Fantasy', 1999, '1999-12-10', 189, 'A man on death row possesses an extraordinary healing ability.'),
(29, 'The Grand Budapest Hotel', 'Wes Anderson', 25000000, 'A writer recounts the adventures of a legendary concierge at a famous European hotel.', 'Comedy', 2014, '2014-03-28', 99, 'The misadventures of a hotel concierge and his protégé.'),
(30, 'A Beautiful Mind', 'Ron Howard', 60000000, 'A brilliant mathematician, plagued by schizophrenia, overcomes his challenges to make groundbreaking discoveries.', 'Biography', 2001, '2001-12-21', 135, 'The story of John Nash, a mathematical genius with schizophrenia.'),
(31, 'La La Land', 'Damien Chazelle', 30000000, 'A jazz musician and an aspiring actress fall in love while pursuing their dreams.', 'Musical', 2016, '2016-12-09', 128, 'Two artists struggle to balance love and ambition in Los Angeles.'),
(32, 'Black Panther', 'Ryan Coogler', 200000000, 'T\'Challa, king of Wakanda, must defend his throne from enemies both foreign and domestic.', 'Action', 2018, '2018-02-16', 134, 'The king of Wakanda defends his nation from threats.'),
(33, 'Blade Runner 2049', 'Denis Villeneuve', 150000000, 'A young blade runner discovers a secret that leads him to track down former blade runner Rick Deckard.', 'Science Fiction', 2017, '2017-10-06', 164, 'A blade runner uncovers a long-hidden secret that shakes the future of humanity.'),
(34, 'Parasite', 'Bong Joon-ho', 11400000, 'A poor family schemes to become employed by a wealthy family by infiltrating their household.', 'Thriller', 2019, '2019-05-30', 132, 'A poor family devises a plan to take over a wealthy household.'),
(35, 'Jojo Rabbit', 'Taika Waititi', 14000000, 'A young boy in Nazi Germany discovers his mother is hiding a Jewish girl in their home.', 'Comedy', 2019, '2019-10-18', 108, 'A boy in Nazi Germany questions his beliefs after a revelation.'),
(36, 'The Imitation Game', 'Morten Tyldum', 14000000, 'During World War II, Alan Turing and his team of code-breakers work to crack the German Enigma code.', 'Biography', 2014, '2014-11-28', 113, 'The story of Alan Turing and the breaking of the Enigma code.'),
(37, 'Her', 'Spike Jonze', 23000000, 'A lonely writer develops an unlikely relationship with an operating system designed to meet his every need.', 'Romance', 2013, '2013-12-18', 126, 'A man falls in love with a sentient AI system.'),
(38, 'The Revenant', 'Alejandro G. Iñárritu', 135000000, 'A frontiersman on a fur trading expedition fights for survival after being mauled by a bear.', 'Adventure', 2015, '2015-12-25', 156, 'A man embarks on a quest for survival and revenge in the wilderness.'),
(39, 'Joker', 'Todd Phillips', 55000000, 'In Gotham City, mentally troubled comedian Arthur Fleck embarks on a downward spiral of social revolution.', 'Thriller', 2019, '2019-10-04', 122, 'A man descends into madness and becomes a criminal mastermind.'),
(40, 'Moonlight', 'Barry Jenkins', 4000000, 'A young African-American man grapples with his identity and sexuality while experiencing the struggles of childhood, adolescence, and adulthood.', 'Drama', 2016, '2016-10-21', 111, 'A young man struggles with his identity and sexuality in three stages of life.'),
(41, 'Slumdog Millionaire', 'Danny Boyle', 15000000, 'A Mumbai teenager reflects on his life after being accused of cheating on India\'s version of "Who Wants to Be a Millionaire?"', 'Drama', 2008, '2008-11-12', 120, 'A teenager recounts his life story while being accused of cheating.'),
(42, 'Django Unchained', 'Quentin Tarantino', 100000000, 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal plantation owner.', 'Western', 2012, '2012-12-25', 165, 'A freed slave seeks revenge and freedom for his wife.'),
(43, 'A Star Is Born', 'Bradley Cooper', 36000000, 'A musician helps a young singer find fame as his own career spirals downwards.', 'Romance', 2018, '2018-10-05', 136, 'A musician’s career declines while his protégé rises to stardom.'),
(44, 'The Big Short', 'Adam McKay', 50000000, 'A few savvy investors predict the collapse of the housing market and make huge profits by betting against it.', 'Drama', 2015, '2015-12-11', 130, 'Investors profit from predicting the 2008 financial crisis.'),
(45, 'The Truman Show', 'Peter Weir', 60000000, 'An insurance salesman discovers his entire life is actually a reality TV show.', 'Drama', 1998, '1998-06-05', 103, 'A man discovers his life has been broadcast as a reality TV show.'),
(46, 'Amélie', 'Jean-Pierre Jeunet', 10000000, 'Amélie is an innocent and naive woman in Paris with her own sense of justice.', 'Romance', 2001, '2001-04-25', 122, 'A shy Parisian woman decides to change the lives of those around her.'),
(47, 'Good Will Hunting', 'Gus Van Sant', 10000000, 'Will Hunting, a janitor at M.I.T., has a gift for mathematics but needs help from a therapist to find his direction in life.', 'Drama', 1997, '1997-12-05', 126, 'A young man with extraordinary math talent discovers his purpose with the help of a therapist.'),
(48, 'Shutter Island', 'Martin Scorsese', 80000000, 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.', 'Thriller', 2010, '2010-02-19', 138, 'A U.S. Marshal investigates a disappearance at a psychiatric hospital.'),
(49, 'The Sixth Sense', 'M. Night Shyamalan', 40000000, 'A boy who communicates with spirits seeks the help of a disheartened child psychologist.', 'Thriller', 1999, '1999-08-06', 107, 'A boy sees dead people and seeks help from a psychologist.'),
(50, 'The Usual Suspects', 'Bryan Singer', 6000000, 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat.', 'Crime', 1995, '1995-08-16', 106, 'A criminal recounts a series of events involving a mysterious crime lord.'); 

*/