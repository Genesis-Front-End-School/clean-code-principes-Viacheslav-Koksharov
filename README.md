[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_2xjYeZK)

<h3>Project architecture “Container components”</h3>

![SchemeOpt](https://github.com/Viacheslav-Koksharov/app-courses/assets/64725709/edaba1c0-99d8-4710-8b75-aa16064ae77e)


The project uses the architectural principle - “Container components”.

The application has the following layers:

1.Views:

- Home Page.
- Course Page.
- Lesson Page.

2.Components:

Each page is made up of individual components:

- Home Page: CoursesList, Loader, Error, ScrollTopButton.
- Course Page: LessonsList, Loader, Error.
- Lesson Page is a subpage - gets the data from the main page and displays the selected lesson from the list stored in the context.

3.Hooks/Helpers:

- Hook useFetch - for accessing and retrieving data from the database.
- Hook usePagination - for pagination on the Home Page, ten courses are in one block.
- Helper functions for formatting video files and designing effects.

4.Context:
- TokenContext - stores information about the token.
- LessonContext - stores information about the number of lessons for each available course.

During the implementation of the project, I applied the acquired knowledge and skills that are typical for beginners developers and used an understandable architectural principle - “Container components”.
This principle is convenient in small applications, but when the project grows, there are
obvious disadvantages of this concept:

+ Horizontal growth of folders components, containers
+ Extra movements are possible
+ Business logic elements are in separate places

With a more detailed acquaintance with the architectural principles of building a project, I came to the conclusion that it is possible to improve the architectural structure of this project according to the principle of Atomic Design Methodology for separating components, where each group has its own purpose and area of responsibility.

The approach distinguishes the following groups of components:
1. Atoms - Basic elements that are not further divided: buttons, links, text elements.
2. Molecules - This is the arrangement of atoms. That is, molecules reuse atoms. For example, a group of buttons or a button + text that can be reused further.
3. Organisms - The arrangement of molecules and atoms into more complex interfaces or features. For example, a form for calculating the cost of a project, in which there are buttons or elements made up of molecules.
4. Templates - These are layouts, which are the rules for the arrangement of elements inside. They can contain any elements: atoms, molecules, organisms.
5. Pages - A navigation element that contains a template for the content within.
