# Tabulky v LaTeXu

!!! Tabulky v LaTex jsou oprus. [Odkaz na tvořič tabulek](https://tablesgenerator.com/latex_tables)

---

Tabulka se dělá pomocí prostředí:

```latex
\begin{tabular}{...}
...
\end{tabular}
```

- {...} určuje zarovnání sloupců

---

## Základní příklad
```latex
\begin{tabular}{l c r}
Jméno & Věk & Skóre \\
\hline
Petr & 20 & 85 \\
Anna & 22 & 90 \\
\end{tabular}
```

### Vysvětlení
- l = left (vlevo)
- c = center (na střed)
- r = right (vpravo)
- & = oddělení sloupců
- \\ = nový řádek
- \hline = vodorovná čára

--- 

## Tabulka s popiskem (doporučeno)
```latex
\begin{table}[h]
\centering
\begin{tabular}{l c r}
Jméno & Věk & Skóre \\
\hline
Petr & 20 & 85 \\
Anna & 22 & 90 \\
\end{tabular}
\caption{Výsledky studentů}
\label{tab:vysledky}
\end{table}
```

---

`Viz tabulka \ref{tab:vysledky}.`  

---

## Důležité tipy
table = obal (kvůli caption, pozici)
tabular = samotná tabulka
[h] = pokus o umístění „tady“
🎯 Čáry a formátování
\begin{tabular}{|l|c|r|}
\hline
A & B & C \\
\hline
1 & 2 & 3 \\
\hline
\end{tabular}

👉 | = svislé čáry

# Lepší vzhled

Použij balíček:

```latex
\usepackage{booktabs}
\begin{tabular}{l c r}
\toprule
Jméno & Věk & Skóre \\
\midrule
Petr & 20 & 85 \\
Anna & 22 & 90 \\
\bottomrule
\end{tabular}
```

- vypadá profesionálněji než \hline

🧩 Shrnutí
```
prvek	význam
tabular	obsah tabulky
table	obal + caption
&	oddělovač sloupců
\\	nový řádek
l/c/r	zarovnání
\hline	čára
```