# LaTeX – rychlé shrnutí práce (modulární projekt)

## Struktura projektu

Typicky je rozděleno:

main.tex
preamble.tex
titlepage.tex
sections/
  ├── intro.tex
  ├── theory.tex
  └── conclusion.tex

---

## 1. Hlavní soubor (main.tex)

Řídí celý dokument.

```latex
\documentclass[a4paper,12pt]{article}

\input{preamble}   % nastavení balíčků

\begin{document}

\input{titlepage}  % titulní stránka

\tableofcontents   % obsah

\newpage

\input{sections/intro}
\input{sections/theory}
\input{sections/conclusion}

\end{document}

👉 \input{} = vloží obsah souboru (jako copy-paste)
```

---

## 2. [Preambule](Preambule/Rozcestnik.md) (preamble.tex)

Sem se dává všechno globální:

```latex
\usepackage[utf8]{inputenc}
\usepackage[czech]{babel}
\usepackage{graphicx}
\usepackage{amsmath}
\usepackage{hyperref}
\usepackage{geometry}

\geometry{margin=2.5cm}
```

### Tady se řeší

- balíčky
- okraje
- vlastní příkazy (\newcommand)  

---

## 3. [Titulní stránka](Title_page/Rozcestnik.md) (titlepage.tex)
```latex
\begin{titlepage}
    \centering
    {\LARGE Název práce \par}
    \vspace{2cm}
    {\Large Autor: Tvoje jméno \par}
    \vfill
    {\large \today\par}
\end{titlepage}
```

### Nebo se může použít:
```latex
\title{Název}
\author{Autor}
\date{\today}

\maketitle
```

---

## 4. Sekce (sections/*.tex)

Např. `intro.tex`:

```latex
\section{Úvod}

Toto je úvodní text.

\subsection{Motivace}
Text...

\subsection{Cíl práce}
Text...
```

### Hierarchie:
```latex
\section{}
\subsection{}
\subsubsection{}
```

---

## 5. [Matematika](Math/Rozcestnik.md)

Inline:
- rovnice je napsána prámo do textu
```latex
$a^2 + b^2 = c^2$
```

Na řádek:
- rovnice je na samostatném řádku
\begin{equation}
E = mc^2
\end{equation}

- [další možnosti](Math/Rozcestnik.md)

---

## 6. [Obrázky](Obrazky/Rozcestnik.md)

\begin{figure}[h]
    \centering
    \includegraphics[width=0.5\textwidth]{image.png}
    \caption{Popis obrázku}
\end{figure}

👉 obrázky dej do složky (např. images/)

---

## 7. [Odkazy a reference](References/Rozcestnik.md)
```latex
\label{sec:uvod}
\ref{sec:uvod}
```

👉 funguje na:

- sekce
- obrázky
- rovnice


📌 8. Důležité tipy (tohle ti ušetří nervy)
🔁 Kompiluj 2× (kvůli obsahu a referencím)
📂 Používej relativní cesty (sections/...)

⚠️ Pozor na diakritiku → musíš mít:

\usepackage[utf8]{inputenc}
🧩 \input vs \include
\input = jednodušší (doporučuju)
\include = pro velké projekty (kapitoly)
🚀 Minimal working example (MWE)
\documentclass{article}

\begin{document}

\section{Test}
Ahoj světe.

\end{document}
🧩 Jak nad tím přemýšlet (nejdůležitější)
main.tex = orchestr
preamble.tex = nastavení
sections/ = obsah
\input = skládání jako LEGO