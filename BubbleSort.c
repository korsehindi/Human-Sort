#include <stdio.h>
/*
Function : displayList
Input : (pointer to integer array, size of array)
Output : Displays the whole array
*/
void displayList(int *a, int size)
{
  int ctr;
  printf("List is : ");
  for(ctr = 0; ctr < size; ctr++)
  	printf("%d\t", *(a + ctr));
  printf("\n");
}

int main()
{
  // initialize an array of integers
  int list[] = {12, 20, 11, 5, 6, 8};

  // calculate size of array
  int size = sizeof(list) / sizeof(int);
  int i, j; // loop counters
  int temp;  // variable to perform swapping

  displayList(list, size);
  
  // Bubble Sort 
  // Pass over the list (size - 1) times
  for(i = 0; i < size; i++) {
    // in every pass, compare all adjacent items
    // swap them if in wrong order
    for(j = 0; j < size - 1; j++) {
      if(list[j] > list[j + 1]) {
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }

  displayList(list, size);

  return 0;
}
