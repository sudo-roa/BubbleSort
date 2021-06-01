#include <stdio.h>

int main(void){
    int tmp;
    int i,j;    
    int data[] = {54,78,12,2,89,25,78,29,69,35};
    int dataNumber = sizeof data / sizeof data[0];
    for(i=0;i<10;i++){
        printf("%d ", data[i]);
    }
    printf("\n");

    for(i=0;i<dataNumber;i++){
        for(j=0;j<dataNumber-i;j++){
            if(data[j]>data[j+1]){
                tmp = data[j];
                data[j] = data[j+1];
                data[j+1] = tmp;
            }
        }
    }

    for(i=0;i<dataNumber;i++){
        printf("%d ", data[i]);
    }
    printf("\n");
    return (0);
}