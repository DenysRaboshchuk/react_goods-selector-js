import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const resetButtonFunction = () => setSelectedGood('');
  const changingText = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';
  const resetButton = selectedGood && (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={resetButtonFunction}
    />
  );

  return (
    <main className="section container">
      {/* <h1 className="title is-flex is-align-items-center">No goods selected</h1> */}

      <h1 className="title is-flex is-align-items-center">
        {changingText}
        {resetButton}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                selectedGood === good && 'has-background-success-light'
              }
            >
              <td>
                {selectedGood !== good ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(good)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={resetButtonFunction}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
