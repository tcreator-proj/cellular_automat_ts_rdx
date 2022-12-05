# ***One-dimension cellular automata***

deploy https://tcreator-proj.github.io/cellular_automat_ts_rdx/

[![automata at work](https://i.gyazo.com/0e5e55e25422a70fd94a1273c257ef9e.gif)](https://gyazo.com/0e5e55e25422a70fd94a1273c257ef9e)

The simplest class of one-dimensional cellular automata. Elementary cellular automata have two possible values for each cell (0 or 1), and rules that depend only on nearest neighbor values. As a result, the evolution of an elementary cellular automaton can completely be described by a table specifying the state a given cell will have in the next generation based on the value of the cell to its left, the value the cell itself, and the value of the cell to its right. Since there are `2×2×2=2^3=8` possible binary states for the three cells neighboring a given cell, there are a total of `2^8=256` elementary cellular automata, each of which can be indexed with an 8-bit binary number (Wolfram 1983, 2002). 

>ref [Wolfram MathWorld](https://mathworld.wolfram.com/ElementaryCellularAutomaton.html)

This is simple cellular automata that was write on TypeScript/React/Redux and jest/react-testing-library for testing application. Application building across `create-react-app`, styling and some components was write on `react-bootstap` and `css-modules`.

Running on local machine with `yarn start` command.

```bash
> yarn start
```




