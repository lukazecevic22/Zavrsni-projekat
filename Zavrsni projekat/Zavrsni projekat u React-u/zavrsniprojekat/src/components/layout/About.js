import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <div className="btnAbout">
                <h6 className="btn btn-primary btn-block">About</h6>
                <p className="text">
                    For more than 15 years, kids all over the world have been discovering the enchanting world of Pokémon.
                        Today, the Pokémon family of products includes video games, the Pokémon Trading Card Game, the Pokémon animated TV series, movies, toys, and much more.
                        The games encourage strategic thinking and, in many cases, basic math skills. Pokémon puts a strong emphasis on good sportsmanship and respect for other players, as well.
                        And many parents feel that the Pokémon TCG and Pokémon video games encourage their children to learn to read, since reading is required in most Pokémon games.
                        What Are Pokémon?
                        Pokémon are creatures of all shapes and sizes who live in the wild or alongside humans.
                        For the most part, Pokémon do not speak except to utter their names. Pokémon are raised and commanded by their owners (called “Trainers”).
                        During their adventures, Pokémon grow and become more experienced and even, on occasion, evolve into stronger Pokémon.
                        There are currently more than 700 creatures that inhabit the Pokémon universe.
                        Pokémon Video Games
                        The first Pokémon video games were released for the Nintendo Game Boy in 1998, and the series has driven the popularity of Pokémon ever since.
                        Pokémon games have thus far appeared exclusively on Nintendo systems, including the Nintendo 3DS and Wii U console.
                        In most games, the player takes on the role of a young Trainer whose journey involves traveling from place to place, catching and training Pokémon,
                        and battling against other Trainers' Pokémon on a quest to become the Pokémon League Champion. An additional goal is to catch and catalog all of the many
                        Pokémon within the game's world. Despite this battling aspect of the games, the Pokémon games avoid explicit violence; Pokémon never die during the course of the game.
                        Trainers are invited to take part in many peripheral activities when playing, including talent and beauty contests, tournaments, and fishing (for Pokémon, of course!).
                        Players can battle and trade Pokémon with other players as well, letting children learn the merits of sharing and sportsmanship.
                         With newer video game systems, players can even play and trade online with other Trainers around the world.
                         Pokémon Trading Card Game  
                        In the Pokémon Trading Card Game, players build decks around their favorite Pokémon and then play against each other,
                        sending their Pokémon into battle to prove who the best Pokémon Trainer is. Players can begin with theme decks—preconstructed decks designed to cover the basics of the game.
                        Then, they can augment their card collections with booster packs that provide more cards, letting players develop more diverse decks.
                        With thousands of cards to choose from, the game is never the same twice. The Pokémon Company International releases four sets of cards,
                        called “expansions,” each year, so the game continues to evolve and expand for both players and collectors.Pokémon Animation
                        The Pokémon animated series goes way back—almost to the time of Pokémon's origin as a video game. The show follows the adventures of a brash young Trainer
                        named Ash Ketchum and his Pokémon pal Pikachu as they travel the world of Pokémon, visiting exotic destinations, meeting many interesting new people and Pokémon,
                        and having lots of exciting adventures. Along the way, they learn about teamwork, compassion, friendship, and fair play as Ash works toward his goal of becoming a Pokémon Master.
                        The Pokémon TV show is one of the most popular children's shows of all time and has spawned a series of animated films that also follow the adventures of Ash Ketchum and friends.
                        The movies involve much greater stakes—often dealing with the legends of the Pokémon world.
                        Learn more about Pokémon animation.
                        Play! Pokémon
                        To encourage play among Pokémon fans, The Pokémon Company International has established Play! Pokémon—a network designed for Pokémon
                        players to find casual and competitive opportunities to play with each other. Initially created to give Pokémon Trading Card Game players the chance to meet, Play!
                        Pokémon has expanded to include video game activities as well as general nongaming activities, such as Pokémon movie viewings and art sessions. Pokémon Leagues, tournaments,
                        and Championship Series events give players chances to test strategies, trade Pokémon and TCG cards, and make new friends who share a common interest in Pokémon.
                        The core value of the Play! Pokémon program is to provide a fun, organized playing environment where kids can grow socially and intellectually.
                        Within the Play! Pokémon environment, an emphasis is placed on fun, fairness, honesty, respect, sportsmanship, and learning. In addition to promoting logical and strategic thinking,
                        good sportsmanship, and core math and reading skills, the game's popularity has even led to parents and their children playing in the same events.
                                            </p>
                                    </div>
            <Link to={"/dashboard"}>
                <button className="btn btn-primary btn-block">Return to pokepedia</button>
            </Link>
        </div>
    )
}







