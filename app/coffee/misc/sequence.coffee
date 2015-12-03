module.exports = class Sequence

  constructor: ( @items ) ->
    @currentItemIndex = 0
    @totalItems       = @items.length

  # ------------------------------------ API

  # Go to the next item
  next : ( loopOnOverShoot=false ) -> @incramentItemIndex 1,  loopOnOverShoot
  prev : ( loopOnOverShoot=false ) -> @incramentItemIndex -1, loopOnOverShoot

  isAtLastItem : ()->
    if @currentItemIndex == @totalItems-1
      return true
    else
      return false


  getCurrentItem : () -> @items[ @currentItemIndex ]
  currentItem    : () -> @getCurrentItem()

  incramentItemIndex : ( incrament, loopOnOvershoot=false) ->
    newIndex = @currentItemIndex + incrament

    # Make sure the new index falls within the range of items
    if newIndex > @totalItems - 1
      newIndex = if loopOnOverShoot then 0 else @totalItems - 1    # if new index is greater than the last item, show last item.
    else if newIndex < 0
      newIndex = if loopOnOverShoot then  @totalItems - 1 else 0  # if the index is less than 0, show first item.

    # Make sure new item is different than old item, return
    if @currentItemIndex != newIndex
      @currentItemIndex = newIndex
      true
    else
      false

  changeItemByIndex : ( newIndex ) ->
    plusOrMinus          = if @newIndex > @currentItemIndex then 1 else -1
    incramentDifference  = Math.abs( @currentItemIndex - @newIndex ) * plusOrMinus
    return @incramentItemIndex( incramentDifference )

